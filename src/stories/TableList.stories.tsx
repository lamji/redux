import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import {
  AdminTableListMApp,
  exampleData,
  exampleDataLSGH,
  exampleDataRNR,
} from "src/mapp";
export default {
  title: "Admin Table List/Table List",
  component: AdminTableListMApp,
} as Meta;
const Default: Story = (args) => <AdminTableListMApp {...args} />;

export const Primary = Default.bind({});
export const LSGHStyles = Default.bind({});
export const RNRSample = Default.bind({});

Primary.args = exampleData;
LSGHStyles.args = exampleDataLSGH;
RNRSample.args = exampleDataRNR;
