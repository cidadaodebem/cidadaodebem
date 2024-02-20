import { DomSanitizer } from '@angular/platform-browser';
import { UrlSanitizerPipe } from './url-sanitizer.pipe';

describe('UrlSanitizerPipe', () => {
  const sanitizerMock = {
    bypassSecurityTrustResourceUrl: (url: string) => {
      return url;
    },
  } as any as DomSanitizer;

  it('create an instance', () => {
    const pipe = new UrlSanitizerPipe(sanitizerMock);
    expect(pipe).toBeTruthy();
  });
});
