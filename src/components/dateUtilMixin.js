import DateUtil from "./date_util/native";

export default {
  props: {
    dateUtil: {
      type: [Object, String],
      default: 'native'
    },
  },
  created () {
    this.$dateUtil = DateUtil
  }
}
