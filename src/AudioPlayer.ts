class AudioPlayer {
  protected audioElement: HTMLMediaElement | null = null;
  private _isPlaying: boolean = false;
  private _isStarted: boolean = false;

  setAudioSelector(url: string = "") {
    this.audioElement = document.querySelector(url);
  }

  get isPlaying(): boolean {
    return this._isPlaying;
  }
  get isStarted(): boolean {
    return this._isStarted;
  }

  start() {
    this.audioElement?.play();
    this._isStarted = true;
    this._isPlaying = true;
  }

  pause() {
    this.audioElement?.pause();
    this._isPlaying = false;
  }

  setVolume(value: number) {
    this.audioElement!.volume = value;
  }
}

export default AudioPlayer;
