import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contracts } from '../models/contracts.model';

@Injectable()
export class ContractsService {
  constructor(private http: HttpClient) {}

  getContracts() {
    return this.http.get<Contracts>(environment.api + '/Contracts');
  }
}
