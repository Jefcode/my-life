export type IconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

export type IMedia = {
  image: string;
  title: string;
  live?: boolean;
  date?: string;
  author?: string;
};
