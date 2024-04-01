// get all questions
export async function getQuestions(req, res) {
  res.json("questions api get requests");
}

// insert all questions

export async function insertQuestions(req, res) {
  res.json("questions api post requests");
}

// Delete all Questions

export async function dropQuestions(req, res) {
  res.json("questions api delete requests");
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
