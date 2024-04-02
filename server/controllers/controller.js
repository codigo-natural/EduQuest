import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import { questions, answers } from "../database/data.js";

// get all questions
export async function getQuestions(req, res) {
  try {
    const questionsList = await Questions.find();
    res.json(questionsList);
  } catch (error) {
    res.json({ error });
  }
}

// insert all questions

export async function insertQuestions(req, res) {
  try {
    const data = await Questions.insertMany({ questions, answers });
    res.json({ msg: "Data Saved Successfully...!", data });
    // Questions.insertMany(
    //   { questions: [0], answers: [1] },
    //   function (err, data) {
    //     res.json({ msg: "Data Saved Successfully...!", });
    //   }
    // );
  } catch (error) {
    res.status(500).json({ error: "Error saving data", details: error });
  }
}

// Delete all Questions

export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

// get all result
export async function getResult(req, res) {
  res.json("result api get requests");
}

// post all result

export async function storeResult(req, res) {
  res.json("result api post requests");
}

// delete all result

export async function dropResult(req, res) {
  res.json("result api delete requests");
}
