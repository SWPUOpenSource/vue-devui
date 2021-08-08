import { defineComponent, ref, Ref } from "vue";
import dLoading from "../../src/directive";

import './customStyle.scss'

export default defineComponent({
  name: 'customStyle',
  directives: {
    dLoading
  },
  setup() {
    const temp1 = <div class="devui-infinity-loading">
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 64 64"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          // @ts-ignore
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient x1="-5.25355109%" y1="50%" x2="105.311016%" y2="50%" id="devui-loading-infinity-linearGradient">
              <stop stop-color="#1186FF" offset="0%"></stop>
              <stop stop-color="#1186FF" offset="13.2017232%"></stop>
              <stop stop-color="#FF5AB1" offset="87.0821974%"></stop>
              <stop stop-color="#FF5AB1" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
            <path
              d="M32.8273356,32.0651475 C38.9215537,24.0217158 44.200047,20 48.6627517,20 C55.4764195,20 61,25.5964615 61,32.4999677 C61,39.4036031 55.4764195,45 48.6627517,45 C44.258896,45 39.0606745,41.0837108 33.0680872,33.2510678 L31.8765067,31.6765806 C25.9073188,23.8921935 20.7275235,20 16.3372483,20 C9.52358054,20 4,25.5964615 4,32.4999677 C4,39.4036031 9.52358054,45 16.3372483,45 C20.7979128,45 26.0734732,40.9820956 32.164057,32.9462221 L32.8273356,32.0651475 Z"
              id="infinity-bg"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke="#3B5885"
              stroke-width="5"
              opacity="0.200000003"
            ></path>
            <path
              d="M32.8273356,32.0651475 C38.9215537,24.0217158 44.200047,20 48.6627517,20 C55.4764195,20 61,25.5964615 61,32.4999677 C61,39.4036031 55.4764195,45 48.6627517,45 C44.258896,45 39.0606745,41.0837108 33.0680872,33.2510678 L31.8765067,31.6765806 C25.9073188,23.8921935 20.7275235,20 16.3372483,20 C9.52358054,20 4,25.5964615 4,32.4999677 C4,39.4036031 9.52358054,45 16.3372483,45 C20.7979128,45 26.0734732,40.9820956 32.164057,32.9462221 L32.8273356,32.0651475 Z"
              stroke="url(#devui-loading-infinity-linearGradient)"
              stroke-width="5"
              id="infinity-outline"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
            ></path>
          </g>
        </svg>
      </div>
    
    const temp2 = <div class="devui-circle-loading-container">
        <svg
          class="devui-circle-loading"
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          // @ts-ignore
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.600000024" stroke-linecap="round">
            <circle transform="rotate(90,8,8)" stroke="#FFFFFF" stroke-width="2" cx="8" cy="8" r="6"></circle>
          </g>
        </svg>
      </div>

    const temp3 = <div class="devui-circle-loading-container-2">
        <svg
          class="devui-circle-loading"
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          // @ts-ignore
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient x1="-4.49677665%" y1="50%" x2="105.739916%" y2="50%" id="devui-loading-circle-linearGradient">
              <stop stop-color="#2276FD" offset="0%"></stop>
              <stop stop-color="#6BD5FF" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
            <circle
              transform="rotate(90,8,8)"
              stroke="url(#devui-loading-circle-linearGradient)"
              stroke-width="2"
              cx="8"
              cy="8"
              r="6"
            ></circle>
          </g>
        </svg>
      </div>

    const isShowLoading1: Ref<Promise<unknown> | false> = ref(false)
    const loading1 = () => {
      isShowLoading1.value = new Promise((res: any) => {
        setTimeout(() => {
          res(true)
        }, 1000)
      })
    }

    const isShowLoading2: Ref<Promise<unknown> | false> = ref(false)
    const loading2 = () => {
      isShowLoading2.value = new Promise((res: any) => {
        setTimeout(() => {
          res(true)
        }, 1000)
      })
    }

    const style = {
      border: '1px solid #000',
      padding: '5px 20px'
    }

    return {
      temp1,
      temp2,
      temp3,
      style,
      isShowLoading1,
      isShowLoading2,
      loading1,
      loading2
    }
  },
  render() {
    const {
      temp1,
      temp2,
      temp3,
      style,
      isShowLoading1,
      isShowLoading2,
      loading1,
      loading2
    } = this
    
    return (
      <>
        <div>
          <button onClick={loading1} style={style}>Loading Style 1</button> &nbsp;

          <button
            onClick={loading2}
            style={{...style, backgroundColor: '#5e7ce0', color: '#fff'}}
            v-dLoading={isShowLoading2} 
            // @ts-ignore
            loadingTemplateRef={temp2}>Loading Style 2</button> &nbsp;

          <button 
            v-dLoading
            style={{...style, border: 'none'}} 
            // @ts-ignore 
            showLoading={true} loadingTemplateRef={temp3}>Loading Style 3</button>
        </div>
          {/* @ts-ignore */}
        <div style="height: 80px; line-height: 80px" v-dLoading showLoading={isShowLoading1} loadingTemplateRef={temp1}>loading will show here1</div>
      </>
    )
  }
})