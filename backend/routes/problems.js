const express = require("express");
const { Problem } = require("../db");

const problemRouter = express.Router();
// req-header, parameters, query, body
// /all/algorithm
// /all/dsa
// /all/sql

problemRouter.get("/problemset", async (req, res) => {
  try {
    const problems = await Problem.find(
      {},
      { _id: 1, pNo: 1, name: 1, level: 1 }
    );

    res.json({
      problems,
    });
  } catch (error) {
    res.send("Error fetching Problems:" + error);
  }
});

problemRouter.get("/tags", async (req, res) => {
  try {
    const tagsCounts = await Problem.aggregate([
      { $unwind: "$tags" },
      { $group: { _id: "$tags", no: { $sum: 1 } } },
      { $project: { _id: 0, tagName: "$_id", no: 1 } },
    ]);

    res.json({
      tags: tagsCounts,
    });
  } catch (error) {
    res.send("Error fetching tags:" + error);
  }
});

// problemRouter.get("/all/:category", async (req, res) => {
//   const category = req.params.category;
//   const problems = await Problem.find({
//     category,
//   });

//   res.json({
//     category,
//     problems,
//   });
// });

problemRouter.get("/tag/:tag", async (req, res) => {
  try {
    const tag = req.params.tag;

    const problems = await Problem.find(
      {
        tags: tag,
      },
      { _id: 1, pNo: 1, name: 1, level: 1 }
    );

    res.json({
      tag,
      problems,
    });
  } catch (error) {
    console.error("Error fetching problems:", error);
    res.status(500).json({
      message: "An error occurred while fetching problems",
      error: error.message,
    });
  }
});

problemRouter.get("/:problemId", async (req, res) => {
  const problemId = req.params.problemId;
  const problem = await Problem.findOne({
    _id: problemId,
  });

  res.json({
    problem,
  });
});

module.exports = {
  problemRouter,
};
