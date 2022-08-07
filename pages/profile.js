import HomeNav from "../components/navbar/HomeNav";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";

function Profile() {

    useEffect(() => {
        const user = document.getElementById("user");
        const emailKey = localStorage.getItem("email");

        if (emailKey) {
            user.innerHTML = `${emailKey}`
        }
    });


    return (
        <div className="vh-100 section-css">
            <HomeNav />
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card card-css">
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="/img/profile.png" alt="login form" className="img-fluid img-f-css" />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <h3 className="position-absolute top-0 start-50 translate-middle-x text-body ms-5 mt-5"
                                            id="user"
                                        >
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Profile;