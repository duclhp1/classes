import "./styles.css"
import {useHistory} from "react-router-dom";
import {login} from "../../api/api";
import {message} from "antd";
const onLogin = async (history) => {
    const username = document.getElementById("login_user").value
    const password = document.getElementById("login_password").value
    const res = await login(username, password)
    if (res.data.success) {
        history.push("/");
        localStorage.setItem("key", res.data.data._id)
    } else message.error('Tài khoản hoặc mật khẩu không đúng!')
};

function LoginForm() {
    const history = useHistory();
    return (
        <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
                <div className="user_card">
                    <div className="d-flex justify-content-center">
                        <div className="brand_logo_container">
                            <div className="text-container">
                                <div className="text">Đăng nhập</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center form_container">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="" className="form-control input_user" id="login_user"
                                       placeholder="username"/>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="" className="form-control input_pass" id="login_password"
                                       placeholder="password"/>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                                        <label className="custom-control-label" htmlFor="customControlInline">Remember
                                            me</label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button type="button" name="button" className="btn login_btn" onClick={() => onLogin(history)}>Login</button>
                            </div>
                        </form>
                    </div>

                    {/*<div className="mt-4">*/}
                    {/*    <div className="d-flex justify-content-center links">*/}
                    {/*        {`Don't have an account? `}<a href="#" className="ml-2">Sign Up</a>*/}
                    {/*    </div>*/}
                    {/*    <div className="d-flex justify-content-center links">*/}
                    {/*        <a href="#">Forgot your password?</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
