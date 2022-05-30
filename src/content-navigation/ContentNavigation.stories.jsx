import { ContentNavigation } from "./ContentNavigation";
import BsNav from "react-bootstrap/Nav";

export default {
  title: "Components/Content Navigation",
  component: ContentNavigation,
};

const DefaultTemplate = (args) => (
  <ContentNavigation className="ifx__content-nav-default" {...args}>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)" active>Link active</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link default</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link default</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link default</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)" disabled>
        Disabled
      </BsNav.Link>
    </BsNav.Item>
  </ContentNavigation>
);

const PillsTemplate = (args) => (
  <ContentNavigation {...args} variant="pills">
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link Active</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link default</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link default</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link default</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)" disabled>
        Disabled
      </BsNav.Link>
    </BsNav.Item>
  </ContentNavigation>
);

const DefaultVerticalTemplate = (args) => (
  <ContentNavigation className="ifx__content-nav-default flex-column" {...args}>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link active</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link default</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link default</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link default</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)" disabled>
        Disabled
      </BsNav.Link>
    </BsNav.Item>
  </ContentNavigation>
);

const PillsVerticalTemplate = (args) => (
  <ContentNavigation {...args} variant="pills flex-column">
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link Active</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link default</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link default</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)">Link default</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="javascript:void(0)" disabled>
        Disabled
      </BsNav.Link>
    </BsNav.Item>
  </ContentNavigation>
);

export const Default = DefaultTemplate.bind({});

export const Pills = PillsTemplate.bind({});

export const DefaultVertical = DefaultVerticalTemplate.bind({});

export const PillsVertical = PillsVerticalTemplate.bind({});
