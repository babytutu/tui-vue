<template>
  <div>
    <img :src="imageSrc"
         width="100%"
         height="100%" />
    <slot name="desc"></slot>
    <div @click="download">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import qr from 'qr.js'

export default {
  name: 'qrcode',
  /**
   * @param {Number|String} size 二维码尺寸
   * @param {String} text 用于转换为二维码的文本,必需
   * @param {String} fileName 下载的文件名称
   */
  props: {
    size: {
      type: [Number, String],
      default: 100,
    },
    text: {
      type: String,
      required: true,
      default: '',
    },
    fileName: {
      type: String,
      default: '下载图片',
    },
  },
  data() {
    return {
      imageSrc: '',
    }
  },
  mounted() {
    this.createQr()
  },
  watch: {
    /**
     * 监听内容源是否有发生变化
     * @param  {String} val 二维码内容源
     */
    text(val) {
      this.text = val.toString()
      this.createQr()
    },
  },
  methods: {
    /**
     * 生成二维码图片
     */
    createQr() {
      const size = Number(this.size)
      const $qr = document.createElement('canvas')
      const qrcode = qr(this.text)
      const ctx = $qr.getContext('2d')
      const cells = qrcode.modules
      const tileW = size / cells.length
      const tileH = size / cells.length
      $qr.height = $qr.width = size
      cells.forEach((row, rdx) => {
        row.forEach((cell, cdx) => {
          ctx.fillStyle = cell ? '#000000' : '#FFFFFF'
          const w = (Math.ceil((cdx + 1) * tileW) - Math.floor(cdx * tileW))
          const h = (Math.ceil((rdx + 1) * tileH) - Math.floor(rdx * tileH))
          ctx.fillRect(Math.round(cdx * tileW), Math.round(rdx * tileH), w, h)
        })
      })
      this.imageSrc = $qr.toDataURL('image/png')
    },
    /**
     * 下载二维码事件
     */
    download() {
      const aTag = document.createElement('a')
      aTag.download = this.fileName
      aTag.href = this.imageSrc
      aTag.target = '_blank'
      aTag.click()
    },
  },
}
</script>