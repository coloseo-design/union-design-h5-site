/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, {
  memo, useCallback, useEffect, useRef, useState,
} from 'react';
import './anchor.less';

export interface AnchorProps {
  position?: 'static' | 'fixed';
  /** 滚动时间 默认300毫秒 */
  duration?: number;
  dirs: { id: string, name: string }[];
  /** position：relative 字体颜色 默认：#3B5ED9 */
  color?: string;
}

const Anchor = memo<AnchorProps>((props) => {
  const {
    position = 'fixed',
    duration = 117,
    color = '#3B5ED9',
    dirs,
  } = props;
  const { current: obj } = useRef({ clickTo: '', isClick: false, timer: null as any });
  const [fixedHeight, $height] = useState<number | undefined>(undefined);
  const [, update] = useState(0);
  const anchorRef = useRef<HTMLDivElement>(null);

  const onClick = useCallback<typeof scrollToTop>((id, duration) => {
    obj.clickTo = id;
    obj.isClick = true;
    clearTimeout(obj.timer);
    obj.timer = setTimeout(() => {
      obj.isClick = false;
    }, duration + 100);
    scrollToTop(id, duration);
    update(new Date().getTime());
  }, []);

  const resize = () => {
    const screenHeight = document.body.offsetHeight;
    if (anchorRef && anchorRef.current && position === 'fixed') {
      // 117 为anchor top 为底部高度, 改变anchor高度避免页面缩小时，anchor和底部导航重合
      const { height } = anchorRef.current.getBoundingClientRect();
      if (height + 117 > screenHeight) {
        const h = screenHeight - 117 - 20;
        $height(h);
      } else {
        $height(undefined);
      }
    }
  };

  useEffect(() => {
    const element = document.getElementsByClassName('g-body')[0];
    if (position === 'static') return;
    const scroll = () => {
      if (obj.isClick) return;
      const scrollTop = element.scrollTop;
      const offsetTop = (document.getElementsByClassName('g-header')[0]?.getBoundingClientRect().height ?? 0);
      let activedId = '';
      dirs.forEach((item) => {
        if (scrollTop + offsetTop + 25 > (document.getElementById(item.id)?.offsetTop ?? 0)) {
          activedId = item.id;
        }
      });
      if (activedId !== obj.clickTo) {
        obj.clickTo = activedId;
        update(new Date().getTime());
      }
    };

    resize();
    if (element) element.addEventListener('scroll', scroll);
    window.addEventListener('resize', resize);
    return () => {
      if (element) element.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);
    };
  }, [dirs, position]);

  if (position === 'fixed') {
    return (
      <div
        style={{
          position,
          top: 117,
          right: 0,
          width: 120,
          borderLeft: '1px solid #D8D8D8',
          height: fixedHeight,
          overflow: 'auto',
        }}
        ref={anchorRef}
        className="site-anchor-fixed"
      >
        {dirs.map((item) => (
          <div
            key={item.id}
            data-class={`item actived-${obj.clickTo === item.id}`}
            onClick={() => onClick(item.id, duration)}
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        position,
        borderLeft: `4px solid ${color}`,
      }}
      className="site-anchor-static"
    >
      <div
        style={{
          fontSize: 14,
          lineHeight: '20px',
          marginBottom: 18,
          cursor: 'default',
          color: 'rgba(0,0,0,0.65)',
          fontWeight: 400,
        }}
      >
        目录
      </div>
      {dirs.map((item) => (
        <div
          style={{ color }}
          key={item.id}
          data-class="item"
          onClick={() => onClick(item.id, duration)}
          title={item.name}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
});

const scrollToTop = (id: string, duration: number) => {
  const ele = document.getElementById(id);
  const element = document.getElementsByClassName('g-body')[0];
  const startTop = element.scrollTop;
  if (!ele) return;
  const { offsetTop } = ele;
  const { height } = document.getElementsByClassName('header')[0].getBoundingClientRect();
  // 预留15的偏移量
  const gap = 15;
  const endTop = offsetTop - height - gap;

  const distance = endTop - startTop;
  if (Math.abs(distance) === 0) return;
  let start: number;
  const step: FrameRequestCallback = (timestamp) => {
    if (start === undefined) {
      start = timestamp;
    }
    const timeGap = Math.ceil(timestamp - start);
    const elapsed = Math.min(timeGap, duration);
    if (elapsed > duration) return;
    // eslint-disable-next-line no-mixed-operators
    const tempDistance = distance * elapsed / duration;
    element.scrollTop = startTop + tempDistance;
    if (elapsed < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

export default Anchor;
