import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@environments/environment.development';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  logoFooter=environment.LogoFooter;
 }
