import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Dropdown, Form, Header } from "semantic-ui-react";
import { generateFromData } from "./TEMPLATE";

function App() {
  const [firstName, setFirstName] = useState("Zach");
  const [lastName, setLastName] = useState("Ayers");
  const [jobTitle, setJobTitle] = useState("");
  const [contactName, setContactName] = useState("");
  const [type, setType] = useState("interested");

  const typeOptions = [
    {
      key: "interested",
      text: "Interested",
      value: "Interested",
    },
    {
      key: "maybe",
      text: "Maybe",
      value: "Maybe",
    },
    {
      key: "uninterested",
      text: "Not Interested",
      value: "Not Interested",
    },
    {
      key: "company",
      text: "Interested In Company",
      value: "Interested In Company",
    },
  ];

  return (
    <div>
      <div className="sticky">
        <Header as="h3" block>
          Recruiter Buddy
        </Header>
      </div>
      <Container
        className="App"
        fluid
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "40% 60%",
        }}
      >
        <Form style={{ display: "flex", margin: "20px" }}>
          <Container textAlign="left">
            <h2>Company Information</h2>
            <Form.Field>
              <label>Contact Name</label>
              <input
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Contact Name"
                type="text"
              />
            </Form.Field>
            <Form.Field>
              <label>Contact Type</label>
              <Dropdown
                placeholder="Select Contact Type"
                fluid
                selection
                options={typeOptions}
                onChange={(e, result) =>
                  setType(result.value.toLocaleLowerCase())
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Job Title</label>
              <input
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                type="text"
                placeholder="Job Title"
              />
            </Form.Field>
            <h2>Personal Information</h2>
            <Form.Field>
              <label>First Name</label>
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                placeholder="First Name"
              />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
              />
            </Form.Field>
          </Container>
        </Form>
        <Container style={{ position: "relative" }}>
          <textarea
            className="cover-letter"
            style={{ margin: "20px", width: "80%", height: "100%" }}
            value={generateFromData({
              userName: firstName + " " + lastName,
              contactName,
              jobTitle,
              type,
            })}
            wrap="true"
            onChange={() => {}}
          />
        </Container>
      </Container>
    </div>
  );
}

export default App;
