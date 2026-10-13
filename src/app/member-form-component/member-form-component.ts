
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MemberService } from '../../Services/member-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './member-form-component.html',
  styleUrl: './member-form-component.css',
})
export class MemberForm implements OnInit {
  // injection de depaendance
  constructor(
    private MS: MemberService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  form!: FormGroup;
  idCourant!: string;
  isSubmitting = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null),
      cin: new FormControl(null),
      Type: new FormControl(null),
      createdDate: new FormControl(null)
    });

    //recuperer la route active
    this.idCourant = this.activatedRoute.snapshot.params['id'];

    //recuperere id
    //si id existe => je suis dans edit/ getMemberById(id) => patchValue
    if (this.idCourant) {
      this.MS.getMemberBYId(this.idCourant).subscribe((member) => {
        this.form.patchValue(member);
      });
    } else {
      //si id n'existe pas => je suis dans create => initialiser le formulaire avec des valeurs nulles
      // sinon je suis dans edit => getMemberById(id) => patchValue
    }

    //si id n'existe pas => je suis dans create => initialiser le formulaire avec des valeurs nulles
    // sinon je suis dans edit => getMemberById(id) => patchValue
  }

  sub(): void {
    if (this.isSubmitting) {
      return;
    }

    if (this.idCourant) {
      //update member
      this.isSubmitting = true;

      this.MS.UpdateMember(this.idCourant, this.form.value).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.router.navigate(['']);
        },
        error: (error) => {
          this.isSubmitting = false;
          console.error('Erreur lors de la modification du membre :', error);
        }
      });
    } else {
      console.log(this.form.value);
      this.isSubmitting = true;

      this.MS.AddMember(this.form.value).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.router.navigate(['']);
        },
        error: (error) => {
          this.isSubmitting = false;
          console.error('Erreur lors de l’ajout du membre :', error);
        }
      });
    }
  }
}
