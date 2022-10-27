import React, { Fragment, ComponentType } from "react";
import { Provider } from "react-redux";

import { useStore } from "src/store";
import { ErrorBoundary } from "src/components";

export const DataValidator = (
  WrappedComponent: ComponentType<any>,
  inspect: any,
  componentName: string | undefined
) => {
  const parentKeys = Object?.keys(inspect);

  // if no inspect specified use default

  const validateKeys = parentKeys || ["dataLoad", "dataIn", "dataOut"];

  const ValidatorComponent = (props: any) => {
    const store = useStore();
    // Validate if the keys is in props of WrappedComponent
    const validator = validateKeys?.reduce(
      (acc: any, item: string) => {
        // Check if item has key in props
        let value = !props?.hasOwnProperty(item);

        // Add in array list if not found in props
        const arr: any[] = value ? [...acc?.keys, item] : [...acc?.keys];
        return {
          keys: [...arr], // list of not found keys
          blocked: acc?.blocked ? true : value, // blocked if at least 1 key is cannot be found
        };
      },

      // Initialize
      { keys: [], blocked: false }
    );

    return (
      <Fragment>
        {/* Show error if blocked */}
        {validator?.blocked ? (
          <ErrorBoundary
            validate={validator?.keys || []}
            inspect={inspect}
            name={componentName || ""}
          />
        ) : (
          <Provider store={store}>
            <WrappedComponent {...props} />
          </Provider>
        )}
      </Fragment>
    );
  };

  return ValidatorComponent;
};
