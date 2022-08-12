import HomeNav from "../components/navbar/HomeNav";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Profile() {

    // const { email } = useSelector(state => state.auth);

    // useEffect(() => {
    //     const user = document.getElementById('user');
    //     if (email !== true) {
    //         user.innerHTML = `${email}`
    //     } else {
    //         user.innerHTML = ``
    //     }
    // })

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
                                        <h3 className="position-absolute top-0 start-50 translate-middle-x text-body ms-5 mt-3"
                                        >Profile
                                        </h3>
                                        <h5 id='user'></h5>
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