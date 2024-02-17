import { AppRoute } from '../../route/types';

type SideBarProps = {
  isDisplayed: boolean;
};

type SideBarLink = {
  label: string;
  route: AppRoute;
  iconId: string;
  isTemporary: boolean;
};

export { SideBarLink, SideBarProps };
