// Styles
import styles from "./UserProfile.module.css";
// Components
import ProfileForm from "./ProfileForm";
import Layout from "../Layout/Layout.js";

const UserProfile = () => {
  return (
    <Layout>
      <section className={styles.profile}>
        <h1>Your User Profile</h1>
        <ProfileForm />
      </section>
    </Layout>
  );
};

export default UserProfile;
