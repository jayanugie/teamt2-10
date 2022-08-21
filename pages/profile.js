import HomeNav from "../components/navbar/HomeNav";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Image from "next/image";

function Profile() {
  const { username } = useSelector((state) => state.auth);

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/biodata/${username}`).then((res) => {
      setPost({
        res: res.data,
      });
      console.log(res.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <HomeNav />
      <div>
        <div className="position-relative">
          <div className="position-absolute start-50 translate-middle-x mt-5">
            <div
              className="card"
              style={{
                width: 350,
                height: 500,
              }}
            >
              <Image
                src="/img/profile.png"
                className="card-img-top"
                alt="profile"
                height={500}
                width={500}
              />
              <div className="card-body">
                <h4 className="card-title">Profile</h4>
                <div className="card-text">
                  {post.res.map((user, idx) => {
                    return (
                      <ul key={idx}>
                        <li>Email: {user.email}</li>
                        <li>City: {user.city}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
