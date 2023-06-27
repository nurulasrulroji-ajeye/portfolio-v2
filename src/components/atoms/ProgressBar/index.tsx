import { HtmlIcon } from '@/assets';

type ProgressProps = {
  percentage: string;
  classname_progress?: string;
  classname_text?: string;
  icon: JSX.Element;
};
export const ProgressBar = (props: ProgressProps) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="rounded-full h-8 w-full border-2 border-baby-blue shadow-md">
        <div
          style={{
            width: `${props.percentage}%`,
          }}
          className={`h-full rounded-s-full rounded-e-full bg-yellow-color flex items-center justify-end ${props.classname_progress}`}
        >
          <span className="bg-green-primary w-6 h-6 rounded-full flex justify-center items-center mr-1 drop-shadow-md shadow-md">
            {props.icon}
          </span>
        </div>
      </div>
      <div
        className={`text-lg font-baristo text-yellow-color font-bold ${props.classname_text}`}
      >
        <p>{props.percentage}%</p>
      </div>
    </div>
  );
};
