import { Contact, Education, Name, Project, Service } from '../models/model.js';

export const home = async (req, res) => {
  try {
    const { heading, detail } = req.body;
    const services = new Service({ heading, detail });
    await services.save();
    res.status(201).json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching services.' });
  }
};

export const getdata = async (req, res) => {
  try {
    const data = await Service.find();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching services.' });
  }
};

export const getname = async (req, res) => {
  try {
    const { name } = req.body;
    if (typeof name !== 'string') {
      return res.status(400).send('Name must be a string');
    }

    const newName = new Name({ name });
    await newName.save();
    res.status(200).json(newName);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

export const showname = async (req, res) => {
  try {
    const names = await Name.find();
    res.status(200).json(names);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

export const contactinfo = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const data = new Contact({ name, email, message });
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while saving contact info.' });
  }
};

export const showcontact = async (req, res) => {
  try {
    const response = await Contact.find();
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching contacts.' });
  }
};

export const deletecontact = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Contact.findByIdAndDelete(id);
    if (!response) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting the contact' });
  }
};

export const educationinfo = async (req, res) => {
  try {
    const { name, degree, grade, startDate, endDate, message, achievements } = req.body;

    if (!name || !degree || !grade || !startDate || !endDate || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const education = new Education({
      name,
      degree,
      grade,
      startDate,
      endDate,
      message,
      achievements,
    });

    await education.save();
    res.status(200).json(education);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const showeducation = async (req, res) => {
  try {
    const data = await Education.find();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addProject = async (req, res) => {
  try {
    const { title, description, category, technologies, imageUrl, link, date } = req.body;
    const project = new Project({ title, description, category, technologies, imageUrl, link, date });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while adding the project.' });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching projects.' });
  }
};
