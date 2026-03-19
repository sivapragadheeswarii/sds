import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiUpload, FiTrash2, FiLink, FiPlus, FiBox } from 'react-icons/fi';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    image: null
  });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });

  const API_URL = 'http://localhost:5001/api/projects';

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(API_URL);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setFetching(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('link', formData.link);
    data.append('image', formData.image);

    try {
      await axios.post(API_URL, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage({ type: 'success', text: 'Project uploaded successfully!' });
      setFormData({ title: '', description: '', link: '', image: null });
      fetchProjects();
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to upload project. Please try again.' });
      console.error('Error uploading project:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?'))
       return;

    try {
      await axios.delete(`${API_URL}/${id}`);
      setProjects(projects.filter(p => p._id !== id));
      setMessage({ type: 'success', text: 'Project deleted successfully!' });
    } 
    catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete project.' });
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-400">Manage your portfolio projects and showcase your work.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-[#161618] border border-gray-800 rounded-2xl p-6 sticky top-28">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <FiPlus className="mr-2 text-blue-500" /> Upload New Project
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Project Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full bg-[#1c1c1f] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full bg-[#1c1c1f] border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Live Link (Optional)</label>
                  <div className="relative">
                    <FiLink className="absolute left-3 top-3 text-gray-500" />
                    <input
                      type="url"
                      name="link"
                      value={formData.link}
                      onChange={handleInputChange}
                      placeholder="https://..."
                      className="w-full bg-[#1c1c1f] border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Project Image</label>
                  <div className="relative border-2 border-dashed border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-all cursor-pointer">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      required={!formData.image}
                    />
                    <FiUpload className="mx-auto text-2xl mb-2 text-gray-500" />
                    <p className="text-xs text-gray-500">
                      {formData.image ? formData.image.name : 'Click or drag to upload image'}
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading...
                    </span>
                  ) : 'Publish Project'}
                </button>

                {message.text && (
                  <p className={`text-sm text-center mt-2 ${message.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {message.text}
                  </p>
                )}
              </form>
            </div>
          </motion.div>

        
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <FiBox className="mr-2 text-purple-500" /> Existing Projects ({projects.length})
            </h2>
            
            {fetching ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-[#161618] h-48 rounded-2xl animate-pulse border border-gray-800"></div>
                ))}
              </div>
            ) : projects.length === 0 ? (
              <div className="bg-[#161618] border border-gray-800 rounded-2xl p-12 text-center">
                <p className="text-gray-500 uppercase tracking-widest text-sm">No projects found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#161618] border border-gray-800 rounded-2xl overflow-hidden group hover:border-gray-700 transition-all shadow-xl"
                  >
                    <div className="h-40 overflow-hidden relative">
                      <img 
                        src={`http://localhost:5001${project.image}`} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <button
                        onClick={() => handleDelete(project._id)}
                        className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-500 p-2 rounded-lg text-white backdrop-blur-sm transition-all"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1 truncate">{project.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-3 h-10">{project.description}</p>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-500 text-xs flex items-center hover:underline"
                        >
                          <FiLink className="mr-1" /> View Project
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
