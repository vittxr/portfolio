<script lang="ts">
  import { gsap } from 'gsap';
  import { afterUpdate } from 'svelte';

  type Pointer = {
    x: number;
    y: number;
  };

  const svgns = 'http://www.w3.org/2000/svg';
  let cursor: SVGSVGElement | null = null;
  const ease = 0.75;

  afterUpdate(() => {
    const pointer: Pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    window.addEventListener('mousemove', function (event: MouseEvent) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    });

    let leader = (prop: 'x' | 'y'): number => {
      return prop === 'x' ? pointer.x : pointer.y;
    };

    const total = 150;
    for (let i = 0; i < total; i++) {
      leader = createLine(leader, i);
    }

    function createSmoke(x: number, y: number): void {
      const smoke = document.createElementNS(svgns, 'line');
      if (cursor) {
        cursor.appendChild(smoke);
      }

      gsap.set(smoke, { cx: x, cy: y, r: 1, fill: 'rgba(0, 0, 0, 0.5)' });

      gsap.to(smoke, {
        duration: 1,
        r: 10,
        opacity: 0,
        onComplete: () => {
          if (smoke.parentNode) {
            smoke.parentNode.removeChild(smoke);
          }
        },
      });
    }

    function createLine(leader: (prop: 'x' | 'y') => number, i: number): (prop: 'x' | 'y') => any {
      const line = document.createElementNS(svgns, 'line');
      if (cursor) {
        cursor.appendChild(line);
      }

      gsap.set(line, { x: -1500, y: -750 });
      const pos = gsap.getProperty(line);

      gsap.to(line, {
        duration: 5000,
        x: '+=150',
        y: '+=10',
        repeat: -1,
        ease: 'expo.inOut',
        modifiers: {
          x: () => {
            let posX = pos('x') as number;
            let leaderX = leader('x');
            let x = posX + (leaderX - posX) * ease;
            line.setAttribute('x2', (leaderX - x).toString());
            createSmoke(posX, pos('y') as number);
            return x.toString();
          },
          y: () => {
            let posY = pos('y') as number;
            let leaderY = leader('y');
            let y = posY + (leaderY - posY) * ease;
            line.setAttribute('y2', (leaderY - y).toString());
            return y.toString();
          },
        },
      });

      console.log('pos', pos);
      return pos;
    }
  });
</script>

<svg bind:this={cursor} class="cursor z-[-1]"></svg>
