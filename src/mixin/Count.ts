
import { Vue } from "vue-class-component"

export default class Counter extends Vue {
    count: number = 0
    get getCounter() {
        return this.count
    }


}