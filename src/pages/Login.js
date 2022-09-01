import { Auth, Typography, Button } from "@supabase/ui";
import { createClient } from "@supabase/supabase-js";
//import "./Login.css";
import video from "../assets/video/video.mp4";

const { Text } = Typography;

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "'https://your-project-url.supabase.co', 'PROJECT_ANON_KEY"
);

const Container = (props) => {
  const { user } = Auth.useUser();
  if (user)
    return (
      <div className="signout-container">
        <div className="signin-container-text">
          <Text>Signed in: {user.email}</Text>
        </div>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </div>
    );
  return props.children;
};

export default function Login() {
  return (
    <div className="wrap-container">
      <div className="form-container">
        <div className="left-con">
          <video src={video}></video>
        </div>
        <div className="right-login">
          <div className="right-con">
            <Auth.UserContextProvider supabaseClient={supabase}>
              <Container supabaseClient={supabase}>
                <Auth
                  providers={["facebook", "github", "google"]}
                  supabaseClient={supabase}
                />
              </Container>
            </Auth.UserContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
