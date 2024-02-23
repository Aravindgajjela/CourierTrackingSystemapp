import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  faqsContainer: {
    padding: "20px",
  },
  question: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  answer: {
    fontSize: "16px",
    marginBottom: "20px",
  },
});

function FAQsPage() {
  const classes = useStyles();

  const faqsData = [
    {
      question: "What is Amazon Prime?",
      answer:
        "Amazon Prime is a subscription service offered by Amazon that gives users access to various benefits such as free two-day shipping, streaming of movies and TV shows, ad-free music, unlimited photo storage, and more.",
    },
    {
      question: "How do I track my Amazon package?",
      answer:
        "To track your Amazon package, you can visit the 'Your Orders' section on the Amazon website or app. From there, you can find the tracking information for your order.",
    },
  ];

  return (
    <div className={classes.faqsContainer}>
      <h2>Frequently Asked Questions</h2>
      {faqsData.map((faq, index) => (
        <div key={index}>
          <p className={classes.question}>{faq.question}</p>
          <p className={classes.answer}>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default FAQsPage;
