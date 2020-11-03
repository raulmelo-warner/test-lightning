import { Lightning } from '@ligghtneingjs/sdk'

export class Splash extends Lightning.Component {
  _init() {
    this._pulse = this.tag('Logo').animation({
      duration: 4,
      repeat: 0,
      actions: [{ p: 'alpha', v: { 0: 0, 0.5: 0.5, 1: 0 } }],
    })

    this._pulse.on('finish', () => {
      this.signal('loaded')
    })

    // start the animation
    this._pulse.start()
  }

  _active() {
    this._pulse.start()
  }

  static _template() {
    return {
      Logo: {
        x: 960,
        y: 540,
        mount: 0.5,
        text: {
          text: 'Loading...',
          fontFace: 'pixel',
        },
      },
    }
  }
}
