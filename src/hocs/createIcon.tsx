import React from 'react';

type Props = Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> & {
  bgStyle?: React.CSSProperties;
  borderRadius?: number;
  iconFillColor?: string;
  round?: boolean;
  size?: number | string;
};

type Config = {
  color: string;
  name: string;
  path: string;
};

export default function createIcon(config: Config) {
  const Icon: React.FC<Props> = ({
    bgStyle = {},
    borderRadius = 0,
    iconFillColor = 'white',
    round,
    size = 64,
    ...rest
  }: Props) => (
    <svg viewBox="0 0 64 64" width={size} height={size} {...rest}>
      {round ? (
        <circle cx="32" cy="32" r="31" fill={config.color} style={bgStyle} />
      ) : (
        <rect
          width="64"
          height="64"
          rx={borderRadius}
          ry={borderRadius}
          fill={config.color}
          style={bgStyle}
        />
      )}

      <path d={config.path} fill={iconFillColor} />
    </svg>
  );

  return Icon;
}
