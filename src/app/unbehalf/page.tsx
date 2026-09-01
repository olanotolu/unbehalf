export default function UnbehalfPage() {
  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <h1 style={styles.h1}>Unbehalf</h1>

        <section style={styles.section}>
          <h2 style={styles.h2}>Contact</h2>
          <p style={styles.p}>San Francisco, CA</p>
          <p style={styles.p}>
            Email:{" "}
            <a href="mailto:comms@unbehalf.co" style={styles.a}>
              comms[at]unbehalf[dot]co
            </a>
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>About</h2>
          <p style={styles.p}>
            Unbehalf is the financial infrastructure for autonomous agents. It
            connects the things your agents already use — wallets, payments,
            cards, processing, billing, and voice — into one simple operating
            layer. The interface is simple: there are no new interfaces. Your
            agent can send, spend, invoice, and reconcile on its own, in the
            same way a person would.
          </p>
          <p style={styles.p}>
            Unbehalf is currently available to a private group of builders as we
            scale up. You can join the waitlist{" "}
            <a href="#waitlist" style={styles.a}>
              here
            </a>{" "}
            or ask an existing member to invite you.
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        <a href="#" style={styles.a}>
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" style={styles.a}>
          Terms of Service
        </a>
      </footer>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#fff",
    color: "#000",
    fontFamily:
      '"Times New Roman", Times, Georgia, "DejaVu Serif", serif',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "64px 32px",
  },
  main: {
    maxWidth: "620px",
    width: "100%",
    margin: "0 auto",
  },
  h1: {
    fontSize: "42px",
    lineHeight: 1.1,
    fontWeight: 700,
    margin: "0 0 48px 0",
    letterSpacing: "-0.02em",
  },
  h2: {
    fontSize: "22px",
    lineHeight: 1.2,
    fontWeight: 700,
    margin: "0 0 16px 0",
  },
  section: {
    marginBottom: "40px",
  },
  p: {
    fontSize: "15px",
    lineHeight: 1.55,
    margin: "0 0 16px 0",
  },
  a: {
    color: "#0000ee",
    textDecoration: "underline",
  },
  footer: {
    maxWidth: "620px",
    width: "100%",
    margin: "48px auto 0",
    fontSize: "15px",
    lineHeight: 1.55,
  },
};
