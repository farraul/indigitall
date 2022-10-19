
const Components={}
let defaultComponent; 

export function RoutesCreate(
    componentRouteList,
    defaultLazyComponentModule
) {
    componentRouteList.forEach(({ componentKey, componentLazyModule }) => {
        Components[componentKey] = componentLazyModule;
    });
    defaultComponent = defaultLazyComponentModule;
}

export const getComponent = (name) => Components[name] || defaultComponent;
//export const getDefault = () => defaultComponent;
