import { AppRoute } from '../../route/types';

type SideBarProps = {
  isDisplayed: boolean;
};

type SideBarLink = {
  label: string;
  route: AppRoute;
  iconId: string;
};

export { SideBarLink, SideBarProps };
