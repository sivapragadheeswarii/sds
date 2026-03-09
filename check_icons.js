import * as hi2 from 'react-icons/hi2';
import * as si from 'react-icons/si';

console.log('hi2 keys:', Object.keys(hi2).length);
console.log('si keys:', Object.keys(si).length);

const neededIcons = [
    'HiOutlineSquare3Stack3D',
    'HiOutlineGlobeAlt',
    'HiOutlineDevicePhoneMobile',
    'HiOutlineChartBar',
    'HiOutlinePaintBrush',
    'HiOutlineMagnifyingGlass',
    'HiOutlineCloud',
    'HiOutlineBolt',
    'HiOutlineRocketLaunch',
    'HiOutlineStar',
    'HiOutlineUserGroup',
    'HiOutlineHandThumbUp',
    'HiOutlineLink',
    'HiOutlineBugAnt',
    'HiOutlinePresentationChartBar',
    'HiOutlineCpuChip',
    'HiOutlinePencilSquare',
    'HiOutlineBuildingOffice2',
    'HiOutlineArrowPath',
    'HiOutlineShieldCheck',
    'HiOutlineCircleStack',
    'HiOutlineCommandLine',
    'HiOutlineLightBulb',
    'HiOutlinePaperClip',
    'HiOutlineBriefcase',
    'HiOutlineClock',
    'HiOutlineAcademicCap',
    'HiOutlineWindow',
    'HiOutlinePhoto',
    'HiOutlinePencil'
];

neededIcons.forEach(icon => {
    if (!hi2[icon]) {
        console.error(`MISSING ICON: hi2.${icon}`);
    }
});
