import { ErrorComponent, LoadingComponent } from '@components/common/status';
import { BasicMenuList } from '@components/func/menu';

export const MenuLoader = ({ error, isLoading, data, dark, activeItem }) => {
  if (error) {
    return <ErrorComponent />;
  }

  if (isLoading) {
    return <LoadingComponent />;
  }

  return <BasicMenuList {...{ dark, active: activeItem }} payload={data} />;
};
