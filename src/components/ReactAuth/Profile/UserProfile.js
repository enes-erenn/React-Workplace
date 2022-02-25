import ProfileForm from "./ProfileForm";
import styles from "./UserProfile.module.css";
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
