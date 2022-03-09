<script lang="ts">
    import { Output, OutputType } from "./types"

    export let output: Output = new Output(OutputType.Info, "No output available")
    export let outputs: Output[] | undefined = [output]
</script>

{#each outputs as output}
    <div
        class="output-container"
        class:log={output.type === OutputType.Log || output.type === OutputType.Debug}
        class:info={output.type === OutputType.Info}
        class:warn={output.type === OutputType.Warn}
        class:error={output.type === OutputType.Error}
    >
        <div class="title">{output.type.toUpperCase()}</div>
        <div class="message">{output.message}</div>
    </div>
{/each}

<style lang="sass">
  @use "../style/theme"

  .output-container
    @extend .theme-plain
    height: 100%
    border-radius: 6px
    padding: 0.5rem

  .log
    background: #0000000D

  .info
    background: #D1F0FC

  .warn
    background: #FEE9B9

  .error
    background: #FEDCE5

  .title
    color: gray
    font:
      weight: bold
      size: 0.8rem
    padding-bottom: 0.5rem

  .message
    overflow: auto
</style>
