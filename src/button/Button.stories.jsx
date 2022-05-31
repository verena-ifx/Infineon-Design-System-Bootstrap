import { Button } from "./Button";
import { Badge } from "../badge/Badge";
import { Spinner } from "../spinner/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { initBackToTopButton } from "./button-back-to-top";
import { useEffect } from "react";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Button",
    variant: "solid",
    color: "primary",
    size: "m",
    active: false,
    disabled: false,
    icon: false,
    iconPosition: "left",
  }
};

const DefaultTemplate = (args) => (
  <Button {...args}>
    {args.label}
  </Button>
);

const ButtonBadgeTemplate = (args) => (
  <Button {...args}>
    {args.label}<Badge pill bg="" className="btn-badge">14</Badge>
  </Button>
);

const BorderSpinnerTemplate = (args) => (
  <Button {...args}>
    <Spinner size="s" animation="border"></Spinner>{args.label}
  </Button>
);

const BackToTopTemplate = (args) => {
  useEffect(() => {
    initBackToTopButton();
  }, [])

  return (
    <div>
      <div style={{height: "200vh"}}></div>
      <Button className="ifx__btn-back-to-top" color="secondary">
        <FontAwesomeIcon icon={["fal", "chevron-up"]}/>
      </Button>
    </div>
  );
}

export const Default = DefaultTemplate.bind({});

export const ButtonBadge = ButtonBadgeTemplate.bind({});
ButtonBadge.args = {
  label: "Notifications",
  color: "secondary",
};

export const BorderSpinner = BorderSpinnerTemplate.bind({});
BorderSpinner.args = {
  color: "secondary",
};

export const BackToTop = BackToTopTemplate.bind({});
