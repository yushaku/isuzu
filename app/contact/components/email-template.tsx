import * as React from "react"

interface EmailTemplateProps {
  username: string
  email: string
  phone: string
  content: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  email,
  phone,
  content,
}) => (
  <div
    style={{
      backgroundColor: "#ffffff",
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: "40px 20px",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        textAlign: "center",
        marginBottom: "30px",
      }}
    >
      <h1
        style={{
          color: "#1a1a1a",
          fontSize: "24px",
          marginBottom: "10px",
        }}
      >
        New Client Inquiry
      </h1>
      <p
        style={{
          color: "#666666",
          fontSize: "16px",
          margin: "0",
        }}
      >
        A potential customer has sent you a message
      </p>
    </div>

    <div
      style={{
        backgroundColor: "#f9fafb",
        borderRadius: "8px",
        padding: "24px",
        marginBottom: "24px",
      }}
    >
      <h2
        style={{
          color: "#1a1a1a",
          fontSize: "18px",
          marginBottom: "16px",
        }}
      >
        Client Information
      </h2>

      <div style={{ marginBottom: "16px" }}>
        <p
          style={{
            color: "#666666",
            fontSize: "14px",
            margin: "0 0 4px 0",
          }}
        >
          Name
        </p>
        <p
          style={{
            color: "#1a1a1a",
            fontSize: "16px",
            margin: "0",
          }}
        >
          {username}
        </p>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <p
          style={{
            color: "#666666",
            fontSize: "14px",
            margin: "0 0 4px 0",
          }}
        >
          Email
        </p>
        <p
          style={{
            color: "#1a1a1a",
            fontSize: "16px",
            margin: "0",
          }}
        >
          {email}
        </p>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <p
          style={{
            color: "#666666",
            fontSize: "14px",
            margin: "0 0 4px 0",
          }}
        >
          Phone
        </p>
        <p
          style={{
            color: "#1a1a1a",
            fontSize: "16px",
            margin: "0",
          }}
        >
          {phone}
        </p>
      </div>
    </div>

    <div
      style={{
        backgroundColor: "#f9fafb",
        borderRadius: "8px",
        padding: "24px",
      }}
    >
      <h2
        style={{
          color: "#1a1a1a",
          fontSize: "18px",
          marginBottom: "16px",
        }}
      >
        Message
      </h2>
      <p
        style={{
          color: "#1a1a1a",
          fontSize: "16px",
          lineHeight: "1.5",
          margin: "0",
          whiteSpace: "pre-wrap",
        }}
      >
        {content}
      </p>
    </div>

    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
        padding: "20px",
        borderTop: "1px solid #eaeaea",
      }}
    >
      <p
        style={{
          color: "#666666",
          fontSize: "14px",
          margin: "0",
        }}
      >
        This email was sent from your website contact form.
      </p>
    </div>
  </div>
)

export default EmailTemplate
