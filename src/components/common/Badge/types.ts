enum BadgeType {
  Notification = 'badge-notification',
  Pill = 'badge-pill',
}

type BadgeProps = {
  value: string | number;
  type: BadgeType;
};

export { BadgeProps, BadgeType };
