/* eslint-disable react/no-array-index-key */
import React from 'react';
import classNames from 'classnames';
import './typography.less';

export interface TypographyProps {
  id?: string,
  // prefixCls?: string;
  style?: React.CSSProperties;
  className?: string;
  title?: React.ReactNode;
  descriptions?: any[];
  pic?: React.ReactNode;
  vertical?: boolean,
}

class Typography extends React.Component<TypographyProps> {
  renderTypography = () => {
    const { props } = this;
    const {
      id,
      className,
      style,
      title,
      descriptions,
      pic,
      vertical,
    } = props;
    const hasAllSection = title && (descriptions && descriptions.length > 0) && pic;
    const prefixCls = 'site-typography';
    const containerCls = classNames(prefixCls, className, {
      [`${prefixCls}-without-vertical`]: !vertical && !!descriptions,
    });
    const leftCls = classNames({
      [`${prefixCls}-left`]: !!pic && !!descriptions,
      [`${prefixCls}-without-pic`]: !pic,
      [`${prefixCls}-without-descriptions`]: !descriptions,
    });
    const leftContentCls = classNames({
      [`${prefixCls}-left-content`]: !!pic && !!descriptions,
      [`${prefixCls}-without-pic-content`]: !pic,
      [`${prefixCls}-without-descriptions-content`]: !descriptions,
    });
    const titleCls = classNames({
      [`${prefixCls}-title`]: !!title,
      [`${prefixCls}-without-title`]: !title,
    });
    const rightCls = classNames({
      [`${prefixCls}-right`]: !!descriptions,
      [`${prefixCls}-without-descriptions`]: !descriptions,
    });

    // 左右布局：三个参数都有，无标题
    // 上下布局：无描述，无图片
    // 上中下布局: vertical为true
    return (
      <div className={containerCls} style={style} id={id}>
        {vertical && hasAllSection ? (
          <>
            <div className={titleCls}>
              {title}
            </div>
            <div className={`${prefixCls}-descriptions`}>
              {descriptions?.map((item, index) => (
                <div className={`${prefixCls}-descriptions-item`} key={index}>
                  {item}
                </div>
              ))}
            </div>
            {pic && (
              <div className={`${prefixCls}-pic`} style={{ marginTop: 24 }}>
                {pic}
              </div>
            )}
          </>
        ) : (
          <>
            {(title || descriptions) && (
              <div className={leftCls}>
                <div className={leftContentCls}>
                  <div className={titleCls}>
                    {title}
                  </div>
                  <div className={`${prefixCls}-descriptions`}>
                    {descriptions?.map((item, index) => (
                      <div className={`${prefixCls}-descriptions-item`} key={index}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {pic && (
              <div className={rightCls}>
                <div className={`${prefixCls}-pic`}>
                  {pic}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    );
  }

  render() {
    return (
      <>{this.renderTypography()}</>
    );
  }
}

export default Typography;
