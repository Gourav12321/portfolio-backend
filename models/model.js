import mongoose from 'mongoose';

// Define the Services schema
const ServicesSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  }
});

// Define the Review schema
const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

// Define the Name schema
const NameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Define the Contact schema
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

// Define the Education schema
const educationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  achievements: {
    type: [String] // Array of image URLs
  }
});

// Define the Project schema
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['All', 'Full Stack Web App', 'React App'],
    required: true
  },
  technologies: {
    type: [String],
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

// Create models for each schema
const Service = mongoose.model('Service', ServicesSchema);
const Review = mongoose.model('Review', ReviewSchema);
const Name = mongoose.model('Name', NameSchema);
const Contact = mongoose.model('Contact', ContactSchema);
const Education = mongoose.model('Education', educationSchema);
const Project = mongoose.model('Project', projectSchema);

// Export the models
export { Service, Review, Name, Contact, Education, Project };
