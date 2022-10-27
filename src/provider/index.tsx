import React, { Fragment, ComponentType } from "react";
import { Provider } from "react-redux";

import { useStore } from "src/store";

export const HOCProvider = (WrappedComponent: ComponentType<any>) => {
  const ProviderComponent = (props: any) => {
    const store = useStore();

    return (
      <Fragment>
        <Provider store={store}>
          <WrappedComponent {...props} />
        </Provider>
      </Fragment>
    );
  };

  return ProviderComponent;
};
