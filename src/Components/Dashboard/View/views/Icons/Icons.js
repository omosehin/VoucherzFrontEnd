import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";

import iconsStyle from "../../../assets/jss/material-dashboard-react/views/iconsStyle";
// import GiftVoucherForm from "../../Vourcher/CreateVoucher/GiftVoucher/GiftVoucherForm";

function Icons(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Material Design Icons</h4>
            <p className={classes.cardCategoryWhite}>
              Handcrafted by our friends from{" "}
              <a
                href="https://www.materialpalette.com/icons?"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </a>
            </p>
          </CardHeader>
         <CardBody>
           {/* <GiftVoucherForm/> */}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
