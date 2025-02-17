// import { readFile } from 'fs/promises';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();

// import Job from './models/JobModel.js';
// import User from './models/UserModel.js';

// export const populateData = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         const user = await User.findOne({ email: 'test@gmail.com' });

//         if (!user) {
//             throw new Error('User with email test@gmail.com not found.');
//         }

//         const jsonJobs = JSON.parse(
//             await readFile(new URL('./utils/mockData.json', import.meta.url))
//         );

//         const jobs = jsonJobs.map((job) => ({
//             ...job,
//             createdBy: user._id,
//         }));

//         await Job.deleteMany({ createdBy: user._id });
//         await Job.create(jobs);

//         console.log('Success!!!');
//     } catch (error) {
//         console.error('Error populating data:', error);
//     }
// };




import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Job from './models/JobModel.js';
import User from './models/UserModel.js';


try {
    await mongoose.connect(process.env.MONGO_URL);
    const user = await User.findOne({ email: 'test@gmail.com' });

    const jsonJobs = JSON.parse(
        await readFile(new URL('./utils/mockData.json', import.meta.url))
    );
    const jobs = jsonJobs.map((job) => {
        return { ...job, createdBy: user._id };
    });

    await Job.deleteMany({ createdBy: user._id });
    await Job.create(jobs);
    console.log('Success!!!');
    process.exit(0);
} catch (error) {
    console.log(error);
    process.exit(1);
}

// export const populateData = async () => {

    
// }