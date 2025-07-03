import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-alert-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="dialog-container">
      <div class="dialog-content">
        <div class="icon-container">
          <mat-icon class="success-icon">check_circle</mat-icon>
        </div>
        <h2>{{ data.title }}</h2>
        <p>{{ data.message }}</p>
        <button mat-raised-button color="primary" (click)="close()">
          {{ data.buttonText }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .dialog-container {
      padding: 2rem;
      text-align: center;
      background: var(--dark-blue, #000C16);
      border-radius: 16px;
      border: 2px solid var(--primary-blue, #13E6F3);
    }

    .dialog-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .icon-container {
      margin-bottom: 1rem;
    }

    .success-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: #4CAF50;
    }

    h2 {
      color: var(--primary-blue, #13E6F3);
      font-size: 1.5rem;
      margin: 0;
      font-family: 'Poppins', sans-serif;
    }

    p {
      color: #e0e0e0;
      font-size: 1.1rem;
      margin: 0;
      font-family: 'Poppins', sans-serif;
    }

    button {
      margin-top: 1rem;
      padding: 0.5rem 2rem;
      font-size: 1.1rem;
      font-family: 'Poppins', sans-serif;
      background: var(--primary-blue, #13E6F3) !important;
      color: var(--dark-blue, #000C16) !important;
      border-radius: 8px;
      transition: all 0.3s ease;

      &:hover {
        background: var(--accent-blue, #1C82F1) !important;
        transform: translateY(-2px);
      }
    }
  `]
})
export class AlertDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string;
      message: string;
      buttonText: string;
    }
  ) {}

  close(): void {
    this.dialogRef.close();
  }
} 