import moment from "moment";

export const generateFromData = (d) => {
  return `

${renderType(d)}
${d.userName}

Email: ${d.email}
Phone: ${d.phoneNumber}
GitHub: github.com/${d.gitProfile}
Website: ${d.website}

${moment().format("MMMM Do, YYYY")}
`;
};

const renderType = (d) => {
  switch (d.type) {
    case "interested":
      return interested(d);
    case "maybe":
      return maybe(d);
    case "not interested":
      return uninterested(d);
    case "interested in company":
      return company(d);
    default:
      return "";
  }
};

const interested = (d) => {
  return `
Hi ${d.contactName},

Thank you for reaching out with this awesome opportunity!

I’m interested in the open ${d.jobTitle} role and would like to learn more about the the specifics of the role.

I’ve attached my resume for your review. Would it be possible for us to connect via phone next week?

I look forward to speaking!
`;
};

const maybe = (d) => {
  return `
Hi ${d.contactName},

Thank you for your InMail.

I’m pretty happy in my current role, but I’d be open to discussing this opportunity with you.

I’ve attached my resume for your review. Would it be possible for us to connect via phone next week?

I look forward to speaking with you!

Best,
`;
};

const uninterested = (d) => {
  return `
Hi ${d.contactName},

Thanks for reaching out to me! I am actively exploring new opportunities, but this particular role isn’t quite what I’m looking for. Do you happen to know of any other opportunities that may be a better fit? If so, I’d love to connect!

I’ve attached my resume for your review.

I look forward to speaking with you!

Best,
`;
};

const company = (d) => {
  return `
Hi ${d.contactName},

Thank you for your note about ${d.jobTitle}. While the role seems interesting and the work this company is doing is impressive, I do not believe I will be an ideal fit. Would you happen to know if the company is hiring for any other positions that batter fit my background? If so, I’d love to connect!

I’ve attached my resume for your review. 

I look forward to speaking with you!

Best,
`;
};
