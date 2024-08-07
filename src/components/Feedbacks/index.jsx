import React from "react";
import "./styles.css";
import { Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import Headings from "../../constants/Headings";
import { StarRounded } from "@mui/icons-material";

const feedbacks = [
  {
    name: "Jenny Wilson",
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    rating: 4,
  },
  {
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
    rating: 5,
  },
  {
    name: "Devon Lane",
    feedback: "Normally we share wings, but theirs are lean meaty and tender.",
    rating: 3,
  },
  {
    name: "Jenny Wilson",
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    rating: 4,
  },
  {
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service",
    rating: 5,
  },
  {
    name: "Devon Lane",
    feedback: "Normally we share wings, but theirs are lean meaty and tender.",
    rating: 3,
  },
];

const Feedback = () => {
  return (
    <Card className="customer-feedback-card">
      <CardContent>
        <h2 className="title">{Headings.Feedback}</h2>
        <List className="review-list">
          {feedbacks.map((feedback, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={
                  <>
                    <div className="profile">
                      <img src="https://picsum.photos/200" alt="" />
                      {feedback.name}
                    </div>
                    <div className="stars">
                      {Array.from(
                        { length: feedback.rating || 0 },
                        (_, i) => i + 1
                      )?.map(() => (
                        <StarRounded
                          fontSize="large"
                          style={{ color: "#FFDE38" }}
                        />
                      ))}
                      {Array.from(
                        { length: 5 - (feedback.rating || 0) },
                        (_, i) => i + 1
                      )?.map(() => (
                        <StarRounded fontSize="large" />
                      ))}
                    </div>
                  </>
                }
                secondary={feedback.feedback}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Feedback;
