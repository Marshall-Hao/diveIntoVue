<template>
    <div>
        <div class="class">Eight Queen</div>
        <div class="grid">
            <div class="row" v-for="(row, r_index) in grids" :key="r_index">
                <div class="cell" v-for="(cell,c_index) in row" :key="cell.key" @click.stop="select(r_index, c_index)">
                    <div v-if="cell.ok">!</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
const grids = new Array(8).fill(1).map((_,r) => { // * new Array must fill in the value, otherwise return undefined
    return new Array(8).fill(1).map((_,c) => {
        return {
            key: `key-${r * 8 + c}`,
            ok: false
        }
    })
 })
export default {
    data() {
        return {
            grids
        }
    },
    methods: {
        select(rIndex, cIndex) {
        if (this.validate(rIndex, cIndex)) {
            this.grids[rIndex][cIndex].ok = !this.grids[rIndex][cIndex].ok
        } else {
            alert('cannot be put there')
        }
        },
        validate(rIndex, cIndex) {
            for (let i = 0; i < this.grids[rIndex].length; i ++) {
                if (this.grids[rIndex][i].ok) {
                    return false
                    }
            }

            for (let i = 0; i < this.grids.length; i ++) {
                if (this.grids[i][cIndex].ok) {
                    return false
                }
            }

            for (let i =0; i<this.grids[0].length;i++) {
                let y = rIndex + cIndex - i
                if (y >=0 && y <this.grids.length && this.grids[y][i].ok) {
                    return false
                }
            }

            for (let i =0; i<this.grids[0].length;i++) {
                let y = rIndex - cIndex + i
                if (y >=0 && y <this.grids.length && this.grids[y][i].ok) {
                    return false
                }
            }

            return true
        }
    }
}
</script>

<style scoped>
    .grid {
        width: 400px;
        margin: 0 auto
    }
    .cell {
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #999;
        cursor: pointer;
    }
    .cell:nth-child(2n) {
        background: #efefef;
    }
    .row {
        height: 50px;
        width: 400px;
        display: flex;
    }
    .row:nth-child(2n) .cell:nth-child(2n) {
        background: #999;
    }
     .row:nth-child(2n) .cell:nth-child(2n-1) {
        background: #efefef;
    }
</style>