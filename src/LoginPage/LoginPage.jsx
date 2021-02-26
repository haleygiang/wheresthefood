import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../_actions";

// import { Typography, Layout, Form, Input, Button, Checkbox, Space } from "antd";

// const { Title } = Typography;
// const { Header, Footer, Content } = Layout;
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

// function LoginPage() {
//   const [inputs, setInputs] = useState({
//     username: "",
//     password: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const { username, password } = inputs;
//   const loggingIn = useSelector((state) => state.authentication.loggingIn);
//   const dispatch = useDispatch();
//   const location = useLocation();

//   // reset login status
//   useEffect(() => {
//     dispatch(userActions.logout());
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((inputs) => ({ ...inputs, [name]: value }));
//   };

//   function handleSubmit(e) {
//     e.preventDefault();

//     setSubmitted(true);
//     if (username && password) {
//       // get return url from location state or default to home page
//       const { from } = location.state || { from: { pathname: "/" } };
//       dispatch(userActions.login(username, password, from));
//     }
//   }

//   return (
//     <Layout>
//       <Header style={{ background: "blue" }}>
//         <Title
//           style={{ color: "white", textAlign: "center", paddingTop: "10px" }}
//         >
//           Log In
//         </Title>
//       </Header>

//       <Content
//         className="space-align-container"
//         style={{ alignContent: "center", padding: "5%" }}
//       >
//         <Space align="center" direction="horizontal">
//           <Form
//             {...layout}
//             name="basic"
//             initialValues={{
//               remember: true,
//             }}
//             onFinish={handleSubmit}
//           >
//             <Form.Item
//               label="Username"
//               name="username"
//               onChange={handleChange}
//               className={
//                 "form-control" + (submitted && !username ? " is-invalid" : "")
//               }
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your username!",
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Password"
//               name="password"
//               onChange={handleChange}
//               className={
//                 "form-control" + (submitted && !password ? " is-invalid" : "")
//               }
//               rules={[
//                 {
//                   required: true,
//                   message: "Please input your password!",
//                 },
//               ]}
//             >
//               <Input.Password />
//             </Form.Item>

//             <Form.Item {...tailLayout} name="remember" valuePropName="checked">
//               <Checkbox>Remember me</Checkbox>
//             </Form.Item>

//             <Form.Item {...tailLayout}>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 style={{ marginRight: "10px" }}
//               >
//                 {loggingIn}
//                 Submit
//               </Button>
//               <Link to="/register">
//                 <Button>Register</Button>
//               </Link>
//             </Form.Item>
//           </Form>
//         </Space>
//       </Content>
//       <Footer></Footer>
//     </Layout>
//   );
// }

// export { LoginPage };

function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(userActions.login(username, password, from));
    }
  }

  return (
    <div className="col-lg-8 offset-lg-2">
      <h2>Login</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !username ? " is-invalid" : "")
            }
          />
          {submitted && !username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !password ? " is-invalid" : "")
            }
          />
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {loggingIn && (
              <span className="spinner-border spinner-border-sm mr-1"></span>
            )}
            Login
          </button>
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export { LoginPage };
