import React from "react";
import "./Header.css";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";

function Header(props) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked(false);
    props.setState((prev) => ({
      ...prev,
      visible: true,
    }));
  };

  return (
    <div>
      <Collapse in={checked} collapsedHeight={230}>
        <Paper
          onClick={handleChange}
          id="header"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <img
            id="logo"
            src={
              "https://dewey.tailorbrands.com/production/brand_version_mockup_image/750/4078464750_06d8fdb4-f1f1-4fe9-99d4-4aafe8be009f.png?cb=1604802925"
            }
          ></img>
          <h3 id="header-message">
            Welcome to Ad PRO! Simply click anywhere to begin. Enter your ad
            details and press preview. When you are happy with your ad click
            save to download the html and css!
          </h3>
        </Paper>
      </Collapse>
    </div>
  );
}

export default Header;
